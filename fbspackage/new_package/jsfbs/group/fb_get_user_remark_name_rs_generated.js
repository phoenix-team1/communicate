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
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS = function() {
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
 * @returns {grouppack.T_GROUP_GET_USER_REMARK_NAME_RS}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {grouppack.T_GROUP_GET_USER_REMARK_NAME_RS=} obj
 * @returns {grouppack.T_GROUP_GET_USER_REMARK_NAME_RS}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.getRootAsT_GROUP_GET_USER_REMARK_NAME_RS = function(bb, obj) {
  return (obj || new grouppack.T_GROUP_GET_USER_REMARK_NAME_RS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RS_HEAD=} obj
 * @returns {commonpack.S_RS_HEAD}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.prototype.sRsHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RS_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.prototype.groupId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.prototype.userRemarkName = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.startT_GROUP_GET_USER_REMARK_NAME_RS = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRsHeadOffset
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.addSRsHead = function(builder, sRsHeadOffset) {
  builder.addFieldStruct(0, sRsHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} groupId
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.addGroupId = function(builder, groupId) {
  builder.addFieldInt64(1, groupId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} userRemarkNameOffset
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.addUserRemarkName = function(builder, userRemarkNameOffset) {
  builder.addFieldOffset(2, userRemarkNameOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.endT_GROUP_GET_USER_REMARK_NAME_RS = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
grouppack.T_GROUP_GET_USER_REMARK_NAME_RS.finishT_GROUP_GET_USER_REMARK_NAME_RSBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.grouppack = grouppack;
