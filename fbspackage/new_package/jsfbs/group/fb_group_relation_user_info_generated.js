// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var grouppack = grouppack || {};

/**
 * @constructor
 */
grouppack.T_GROUP_RELATION_USER_INFO = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {grouppack.T_GROUP_RELATION_USER_INFO}
 */
grouppack.T_GROUP_RELATION_USER_INFO.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {grouppack.T_GROUP_RELATION_USER_INFO=} obj
 * @returns {grouppack.T_GROUP_RELATION_USER_INFO}
 */
grouppack.T_GROUP_RELATION_USER_INFO.getRootAsT_GROUP_RELATION_USER_INFO = function(bb, obj) {
  return (obj || new grouppack.T_GROUP_RELATION_USER_INFO).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
grouppack.T_GROUP_RELATION_USER_INFO.prototype.groupId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_RELATION_USER_INFO.prototype.messageStatus = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_RELATION_USER_INFO.prototype.saveType = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
grouppack.T_GROUP_RELATION_USER_INFO.startT_GROUP_RELATION_USER_INFO = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupId
 */
grouppack.T_GROUP_RELATION_USER_INFO.addGroupId = function(builder, groupId) {
  builder.addFieldInt64(0, groupId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} messageStatus
 */
grouppack.T_GROUP_RELATION_USER_INFO.addMessageStatus = function(builder, messageStatus) {
  builder.addFieldInt8(1, messageStatus, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} saveType
 */
grouppack.T_GROUP_RELATION_USER_INFO.addSaveType = function(builder, saveType) {
  builder.addFieldInt8(2, saveType, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
grouppack.T_GROUP_RELATION_USER_INFO.endT_GROUP_RELATION_USER_INFO = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
grouppack.T_GROUP_RELATION_USER_INFO.finishT_GROUP_RELATION_USER_INFOBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.grouppack = grouppack;
