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
var syspack = syspack || {};

/**
 * @constructor
 */
syspack.T_SMS_VALID_RQ = function() {
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
 * @returns {syspack.T_SMS_VALID_RQ}
 */
syspack.T_SMS_VALID_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {syspack.T_SMS_VALID_RQ=} obj
 * @returns {syspack.T_SMS_VALID_RQ}
 */
syspack.T_SMS_VALID_RQ.getRootAsT_SMS_VALID_RQ = function(bb, obj) {
  return (obj || new syspack.T_SMS_VALID_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
syspack.T_SMS_VALID_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {number}
 */
syspack.T_SMS_VALID_RQ.prototype.nationCode = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns {flatbuffers.Long}
 */
syspack.T_SMS_VALID_RQ.prototype.mobile = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
syspack.T_SMS_VALID_RQ.startT_SMS_VALID_RQ = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
syspack.T_SMS_VALID_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {number} nationCode
 */
syspack.T_SMS_VALID_RQ.addNationCode = function(builder, nationCode) {
  builder.addFieldInt32(1, nationCode, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} mobile
 */
syspack.T_SMS_VALID_RQ.addMobile = function(builder, mobile) {
  builder.addFieldInt64(2, mobile, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
syspack.T_SMS_VALID_RQ.endT_SMS_VALID_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
syspack.T_SMS_VALID_RQ.finishT_SMS_VALID_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.syspack = syspack;