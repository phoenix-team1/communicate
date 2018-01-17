// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var grouppack = grouppack || {};

/**
 * @constructor
 */
grouppack.T_GROUP_BASE_INFO = function() {
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
 * @returns {grouppack.T_GROUP_BASE_INFO}
 */
grouppack.T_GROUP_BASE_INFO.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {grouppack.T_GROUP_BASE_INFO=} obj
 * @returns {grouppack.T_GROUP_BASE_INFO}
 */
grouppack.T_GROUP_BASE_INFO.getRootAsT_GROUP_BASE_INFO = function(bb, obj) {
  return (obj || new grouppack.T_GROUP_BASE_INFO).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns {flatbuffers.Long}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupId = function() {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupImgUrl = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 10);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupManagerUserId = function() {
  var offset = this.bb.__offset(this.bb_pos, 12);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupAddIsAgree = function() {
  var offset = this.bb.__offset(this.bb_pos, 14);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupCt = function() {
  var offset = this.bb.__offset(this.bb_pos, 16);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupRemark = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 18);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupMaxCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 20);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_BASE_INFO.prototype.messageStatus = function() {
  var offset = this.bb.__offset(this.bb_pos, 22);
  return offset ? this.bb.readInt8(this.bb_pos + offset) : 0;
};

/**
 * @returns {number}
 */
grouppack.T_GROUP_BASE_INFO.prototype.groupAddMaxCount = function() {
  var offset = this.bb.__offset(this.bb_pos, 24);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param {flatbuffers.Builder} builder
 */
grouppack.T_GROUP_BASE_INFO.startT_GROUP_BASE_INFO = function(builder) {
  builder.startObject(11);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupId
 */
grouppack.T_GROUP_BASE_INFO.addGroupId = function(builder, groupId) {
  builder.addFieldInt64(0, groupId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupNameOffset
 */
grouppack.T_GROUP_BASE_INFO.addGroupName = function(builder, groupNameOffset) {
  builder.addFieldOffset(1, groupNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupImgUrlOffset
 */
grouppack.T_GROUP_BASE_INFO.addGroupImgUrl = function(builder, groupImgUrlOffset) {
  builder.addFieldOffset(2, groupImgUrlOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} groupCount
 */
grouppack.T_GROUP_BASE_INFO.addGroupCount = function(builder, groupCount) {
  builder.addFieldInt32(3, groupCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupManagerUserId
 */
grouppack.T_GROUP_BASE_INFO.addGroupManagerUserId = function(builder, groupManagerUserId) {
  builder.addFieldInt64(4, groupManagerUserId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} groupAddIsAgree
 */
grouppack.T_GROUP_BASE_INFO.addGroupAddIsAgree = function(builder, groupAddIsAgree) {
  builder.addFieldInt8(5, groupAddIsAgree, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupCt
 */
grouppack.T_GROUP_BASE_INFO.addGroupCt = function(builder, groupCt) {
  builder.addFieldInt64(6, groupCt, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} groupRemarkOffset
 */
grouppack.T_GROUP_BASE_INFO.addGroupRemark = function(builder, groupRemarkOffset) {
  builder.addFieldOffset(7, groupRemarkOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} groupMaxCount
 */
grouppack.T_GROUP_BASE_INFO.addGroupMaxCount = function(builder, groupMaxCount) {
  builder.addFieldInt32(8, groupMaxCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} messageStatus
 */
grouppack.T_GROUP_BASE_INFO.addMessageStatus = function(builder, messageStatus) {
  builder.addFieldInt8(9, messageStatus, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} groupAddMaxCount
 */
grouppack.T_GROUP_BASE_INFO.addGroupAddMaxCount = function(builder, groupAddMaxCount) {
  builder.addFieldInt32(10, groupAddMaxCount, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
grouppack.T_GROUP_BASE_INFO.endT_GROUP_BASE_INFO = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
grouppack.T_GROUP_BASE_INFO.finishT_GROUP_BASE_INFOBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.grouppack = grouppack;
